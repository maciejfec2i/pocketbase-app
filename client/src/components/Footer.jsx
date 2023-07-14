import { changePage } from "../utils/utilities";

export default function Footer(props) {
  return (
    <div className="footer">
      <div>
        <div className="pagination flex-container pagination centre">
          <button className="btn-main-dark" 
          disabled={props.currentPage === 1 ? true: false}
          onClick={
            () => changePage({ 
              currentPage: props.currentPage, 
              setCurrentPage: props.setCurrentPage, 
              direction: "prev" 
            })
          }>Prev</button>
          
          <p className="pages text-not-selectable">{props.currentPage} of {props.totalPages}</p>
          
          <button className="btn-main-dark" 
          disabled={props.currentPage === props.totalPages ? true : false} 
          onClick={
            () => changePage({ 
              currentPage: props.currentPage, 
              setCurrentPage: props.setCurrentPage,
              direction: "next" 
            })
          }>Next</button>
        </div>
      </div>
    </div>
  )
}
