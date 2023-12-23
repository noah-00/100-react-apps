type Props = {
  children: React.ReactNode;
};

export const Container = (props: Props) => {
  return (
    <div className="card w-3/4  bg-base-300 shadow-xl pb-20">
      <div className="card-body">
        <h1 className="text-lg font-bold text-center">TODO</h1>
        {props.children}
      </div>
    </div>
  );
};
