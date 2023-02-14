import ButtonPrimary from "../ButtonPrimary";

type Props = {
  message: string;
  onDialogClose: Function;
};

export default function DialogInfo({ message, onDialogClose }: Props) {
  return (
    <div className="ec-dialog-background" onClick={() => onDialogClose()}>
      <div className="ec-dialog-box" onClick={(e) => e.stopPropagation()} >
        <h2>{message}</h2>
        <div
          className="ec-dialog-btn-container"
          onClick={() => onDialogClose()}>
          <ButtonPrimary text="Ok" />
        </div>
      </div>
    </div>
  );
}
