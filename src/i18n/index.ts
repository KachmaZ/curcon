import en from './en.json'
import ru from './ru.json'

type MessageSchema = typeof en;

export const messages: Record<string, MessageSchema> = {
    en,
    ru
}