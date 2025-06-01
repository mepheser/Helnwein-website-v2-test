import React, {FunctionComponent} from 'react'
import {CategoryContext} from '@repo/sanity/categories'
import ImageGroupItem from './ImageGroupItem'
import {ImageGroupListItem} from '@repo/sanity/selections'
import ImageGroupDetails from './ImageGroupDetails'

interface Props {
  context: CategoryContext
  selected?: string
  data: ImageGroupListItem[]
}

const ImageGroupList: FunctionComponent<Props> = ({context, selected, data}) => {
  const selectedGroup = data.find(value => value._id === selected)
  const selectedIndex = data.findIndex(value => value._id === selected)

  return (
    <main className={'grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 max-w-[600px] xl:max-w-[914px] 2xl:max-w-[1228px]'}>
      {data.map((value, index) => (
        <React.Fragment key={value._id}>
          <ImageGroupItem data={value} context={context} isSelected={value._id === selected} key={value._id} />
          {selectedGroup && ((index + 1) % 2 === 0 || index === data.length - 1) && (
            <div key={'row_2_' + value._id} className={'h-auto w-full col-span-2 xl:hidden'}>
              {selectedIndex <= index && selectedIndex > index - 4 && <ImageGroupDetails selected={selectedGroup!} />}
            </div>
          )}
          {selectedGroup && ((index + 1) % 3 === 0 || index === data.length - 1) && (
            <div key={'row_3_' + value._id} className={'h-auto w-full col-span-3 hidden xl:block 2xl:hidden'}>
              {selectedIndex <= index && selectedIndex > index - 4 && <ImageGroupDetails selected={selectedGroup!} />}
            </div>
          )}
          {selectedGroup && ((index + 1) % 4 === 0 || index === data.length - 1) && (
            <div key={'row_4_' + value._id} className={'h-auto w-full col-span-4 hidden 2xl:block'}>
              {selectedIndex <= index && selectedIndex > index - 4 && <ImageGroupDetails selected={selectedGroup!} />}
            </div>
          )}
        </React.Fragment>
      ))}
    </main>
  )
}

export default ImageGroupList
