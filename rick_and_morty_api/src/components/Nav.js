function Nav({page, setPage}) {
  return (
    <header className="d-flex justify-content-between align-items-center">
        <h1>Current page: {page}</h1>
        <button className="btn btn-primary btm-sm"
          onClick={() => setPage(page+1)}
        >NextPage {page+1}</button>
    </header>
  )
}

export default Nav