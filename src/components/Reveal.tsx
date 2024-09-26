

interface Props {
    children: JSX.Element;
}

export const Reveal = ({ children }: Props) => { 
    return (
        <div className="reveal">
            {children}
        </div>
    );
  }