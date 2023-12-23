"use client";

import React, { useState } from "react";

type Props = {
  handleAdd: (title: string) => void;
};

export const TodoForm = (props: Props) => {
  const [title, setTitle] = useState("");
  const [isValidate, setIsValidate] = useState(false);

  const closeModal = () => {
    (document.getElementById("my_modal_1") as HTMLDialogElement)?.close();
  };

  const clickAdd = () => {
    if (title === "") {
      setIsValidate(true);
      return;
    }
    props.handleAdd(title);
    setTitle("");
    closeModal();
  };

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg my-6">Add Todo</h3>
        <div className="form-control"></div>
        <input
          type="text"
          placeholder="Title"
          className="input input-bordered w-full"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setIsValidate(false);
          }}
        />
        {isValidate && <p className="text-xs text-error pt-2">Please enter a title</p>}
        <div className="modal-action"></div>
        <div className="justify-between flex">
          <button
            className="btn"
            onClick={() => {
              setIsValidate(false);
              closeModal();
            }}
          >
            Cancel
          </button>
          <button className="btn btn-primary" onClick={clickAdd}>
            Add
          </button>
        </div>
      </div>
    </dialog>
  );
};
