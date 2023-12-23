import React from "react";

export const TodoForm = () => {
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg my-6">Add Todo</h3>
        <div className="form-control"></div>
        <input type="text" placeholder="Title" className="input input-bordered w-full" />
        <div className="modal-action"></div>
        <form method="dialog" className="justify-between flex">
          <button className="btn">Cancel</button>
          <button className="btn btn-primary">Add</button>
        </form>
      </div>
    </dialog>
  );
};
