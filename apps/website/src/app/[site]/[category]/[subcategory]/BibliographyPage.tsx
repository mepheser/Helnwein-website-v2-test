'use client'

import React, {FunctionComponent, useCallback, useEffect, useRef, useState} from 'react'
import {ArticleListItem, QuoteDetail} from '@repo/sanity/selections'
import {CategoryContext} from '@repo/sanity/categories'
import ArticleList from '@repo/ui/article/ArticleList'
import QuoteList from '@repo/ui/quote/QuoteList'
import FeedbackList from '@repo/ui/quote/FeedbackList'
import BibliographyList from '@repo/ui/article/BibliographyList'

interface Props {
  data: ArticleListItem[],
}

const BibliographyPage: FunctionComponent<Props> = ({data}) => {
  const [list, setList] = useState(data)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const currentPageRef = useRef(0)
  const loadingElementRef = useRef<HTMLDivElement | null>(null);

  const fetchQuotes = useCallback(async (pageNum: number) => {
    setLoading(true)
    try {
        const response = await fetch(`/api/bibliography/${pageNum}`)
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
        fetchQuotes(currentPageRef.current + 1)
        currentPageRef.current = currentPageRef.current + 1
      }
    }, { rootMargin: "600px" });

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasMore]);

  return (
    <>
      <BibliographyList data={list} />
      <div ref={loadingElementRef} className="h-10" />
      {loading && hasMore && (
        <p className="mt-2 text-center text-gray-500">Loading…</p>
      )}
    </>
  )
}

export default BibliographyPage
