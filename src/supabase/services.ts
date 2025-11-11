import { supabase } from "./index"

const ERROR_CODE_ALREADY_EXISTS = '23505'
const ERROR_CODE_TABLE_NOT_FOUND = 'PGRST205'

export const saveForm = async (name: string, email: string, phone: number, like: boolean, dislike: boolean, message: string) => {
    const {data, error} = await supabase.from('user').insert({
        name,
        email,
        phone,
        like,
        dislike,
        message
    })
    console.log(data)
    if (error) {
        return {
            success: false,
            message: 'Hubo un error al enviar el formulario',
        }
    }
    return {
        success: true,
        error: null,
    }
}