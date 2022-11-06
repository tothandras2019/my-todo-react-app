export const AsideContainer = ({ className, children, logoComponent }) => {
  return (
    <aside className={className}>
      <div className='card'>
        <ul>
          {logoComponent}
          {children}
        </ul>
      </div>
    </aside>
  )
}

export default AsideContainer
