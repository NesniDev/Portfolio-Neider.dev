import { saveForm } from "../../supabase/services";
import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";

export const getForm = defineAction({
    accept: 'json',
    input: z.object({
        name: z.string(),
        email: z.string().email(),
        phone: z.number().optional(),
        like: z.boolean().nullable().optional(),
        dislike: z.boolean().nullable().optional(),    
        message: z.string().optional().default(''),
    }),
    handler: async ({name, email, phone, like, dislike, message}) => {

        const {success, error} = await saveForm(name, email, phone, like, dislike, message)
        
        if(!success){
            throw new ActionError({
                code: 'BAD_REQUEST',
                message: error ?? 'Error al enviar el formulario',
            })
        }
        
        return {
            success: true,
            error: 'Formulario enviado correctamente',
        }
    }
})