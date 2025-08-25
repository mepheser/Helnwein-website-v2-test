'use client'

import React, {FunctionComponent, useCallback, useEffect, useRef, useState} from 'react'
import {ArticleListItem} from '@repo/sanity/selections'
import {CategoryContext} from '@repo/sanity/categories'
import ArticleList from '@repo/ui/article/ArticleList'

interface Props {
  data: ArticleListItem[],
  context?: CategoryContext,
  filter?: string,
}

const ArticlePage: FunctionComponent<Props> = ({context, data, filter}) => {
  const [list, setList] = useState(data)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const currentPageRef = useRef(0)
  const loadingElementRef = useRef<HTMLDivElement | null>(null);

  const fetchArticles = useCallback(async (pageNum: number) => {
    if (!context) {
      return
    }

    setLoading(true)
    try {
      const response = await fetch(`/api/articles/${context.site}/${context.activeCategory!.id}/${context.activeSubcategory!.id}/${pageNum}?filter=`)
      const data = await response.json()

      setList((prev) => [...prev, ...data.data])
      setHasMore(data.data.length > 0)
    } catch (error) {
      console.error("Error fetching posts:", error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!loadingElementRef.current) {
      return
    }

    if (!hasMore) {
      return
    }

    const el = loadingElementRef.current;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some(e => e.isIntersecting)) {
        fetchArticles(currentPageRef.current + 1)
        currentPageRef.current = currentPageRef.current + 1
      }
    }, { rootMargin: "600px" });

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasMore]);

  return (
    <>
      <ArticleList context={context} data={list} />
      <div ref={loadingElementRef} className="h-10" />
      {loading && hasMore && (
        <p className="mt-2 text-center text-gray-500">Loading…</p>
      )}
    </>
  )
}

export default ArticlePage
