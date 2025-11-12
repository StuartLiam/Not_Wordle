import './Modal.css'

type Props = {
    open: Boolean;
    closeFn?: () => void;
    content?: React.ReactNode;
    titleContent?: React.ReactNode;
    className?: string;
}

const Component: React.FC<Props> = (props) => {

    if(!props.open) return null;

    return(
        <div className={`modal ${props.className}`} onClick={props.closeFn}>
            <div className="modal_Container" onClick={(e) => e.stopPropagation()}>
                <div className="modal_Title">
                    {props.titleContent}
                    <button className="close_btn" onClick={props.closeFn}>X</button>
                </div>
                <div className="modal_bdy">
                    {props.content}
                </div>
            </div>
        </div>
    );
};
export default Component;