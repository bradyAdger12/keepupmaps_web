import { observer } from "mobx-react-lite";

const DeleteModal = observer(({ element_id, onDelete }: { element_id: string, onDelete: () => void }) => {
  return (
    <dialog id={element_id} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Are you sure you want to delete?</h3>
        <p className="mt-4">This operation cannot be undone</p>
        <div className="modal-action">
          <button className="btn btn-primary text-white border-none" onClick={() => { onDelete(); (document.getElementById(element_id) as HTMLDialogElement).close() }}>
            Yes
          </button>
          <button className="btn bg-gray-200 border-none" onClick={() => (document.getElementById(element_id) as HTMLDialogElement).close()}>
            Cancel
          </button>
        </div>
      </div> 
      <form method="dialog" className="modal-backdrop opacity-20">
        <button>close</button>
      </form>
    </dialog>
  )
})

export default DeleteModal