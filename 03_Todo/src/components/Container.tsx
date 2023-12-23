type Props = {
  children: React.ReactNode;
};

export const Container = (props: Props) => {
  return (
    <div className="card w-3/4 min-h-[80%] bg-base-300 shadow-xl">
      <div className="card-body">
        <h1 className="text-lg font-bold text-center">TODO</h1>
        {props.children}
      </div>
    </div>
  );
};
