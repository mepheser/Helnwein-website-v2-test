import React, {FunctionComponent} from 'react'
import {CategoryContext} from '@repo/sanity/categories'
import {getImageGroupList} from '@repo/sanity/queries'
import ImageGroupItem from "./ImageGroupItem";
import ImageGroupDetails from "./ImageGroupDetails";

interface Props {
  context: CategoryContext
  selected?: string
}

const ImageGroupList: FunctionComponent<Props> = async ({context, selected}) => {
  const data = await getImageGroupList(context.activeSubcategory?.id!)
  const selectedGroup = data.find(value => value._id === selected)
  const selectedIndex = data.findIndex(value => value._id === selected)

  return (
    <main className={'flex flex-wrap gap-8'}>
      {data.map((value, index) => (
        <>
          <ImageGroupItem key={value._id} data={value} context={context} isSelected={value._id === selected} />
          {selectedGroup && ((index + 1) % 4 === 0 || index === data.length - 1) && (
            <div key={'row' + value._id} className={'h-auto w-full'}>
              {selectedIndex <= index && selectedIndex > index - 4 && <ImageGroupDetails selected={selectedGroup!} />}
            </div>
          )}
        </>
      ))}
    </main>
  )
}

export default ImageGroupList
