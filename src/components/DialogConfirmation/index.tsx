import ButtonPrimary from "../ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary";

type Props = {
  message: string;
  onDialogAnswer: Function;
};

export default function DialogConfirmation({ message, onDialogAnswer }: Props) {
  return (
    <div className="ec-dialog-background" onClick={() => onDialogAnswer(false)}>
      <div className="ec-dialog-box" onClick={(e) => e.stopPropagation()}>
        <h2>{message}</h2> 

        <div className="ec-dialog-btn-box" >
          <div onClick={() => onDialogAnswer(false)}>
            <ButtonSecondary text="Não" />
          </div>

          <div onClick={() => onDialogAnswer(true)}>
            <ButtonPrimary text="Sim" />
          </div>
        </div>
      </div>
    </div>
  );
}
