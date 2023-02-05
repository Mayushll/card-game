import { SQuitButton } from "./QuitButton.style"

export const QuitButton = ({ quit }: any) => {
    return (
        <div>
            <SQuitButton onClick={quit}>В профиль</SQuitButton>
        </div>
    )
}
