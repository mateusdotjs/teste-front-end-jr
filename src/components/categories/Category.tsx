import './category.scss'

type CategoryProps =  {
    title: string
    url: string
    active: boolean
}

const Category = ({title, url, active}: CategoryProps) => {
  return (
    <li className='category'>
        <div className="category-bg">
          <img src={url} />
        </div>
        <span className={`${active ? 'color-main' : ''}`}>{title}</span>
    </li>
  )
}

export default Category