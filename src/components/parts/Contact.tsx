import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAIL_USER_ID;

const ContactMe = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [submitting, setSubmitting] = useState<boolean>(false)
    const [sent, setSent] = useState<boolean>(false)

    const handleContactMe = () => {
        setError('')

        if (name && email && message) {
            // handle send email
            try {
                setSubmitting(true)

                emailjs.send(
                    SERVICE_ID,
                    TEMPLATE_ID,
                    {
                        from_name: name,
                        reply_email: email,
                        message: message
                    }, 
                    {
                        publicKey: PUBLIC_KEY,
                    }
                ).then(() => {
                    setSent(true)
                }
            )
            } catch (error) {
                setError('Something went wrong!')
            } finally {
                setSubmitting(false)
            }
        } else {
            setError('Please fill in all the fields')
        }
    }

    return (
        <div id="ContactMe">
            <div className='text-3xl'>Contact</div>
            <div className="flex flex-col gap-4 max-w-screen-md py-3 m-auto">
                <div className="flex flex-col gap-4 sm:flex-row">
                    <Input 
                        type="text" 
                        placeholder="How should I call you?" 
                        className="p-2 rounded-lg border-2 border-indigo-600"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input 
                        type="email" 
                        placeholder="Your Email" 
                        className="p-2 rounded-lg border-2 border-indigo-600"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <Textarea 
                    placeholder="Leave your message here!" 
                    className="p-2 rounded-lg border-2 border-indigo-600"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></Textarea>
                <div className="flex gap-2 text-center self-end">
                    {error? <div className="text-red-500 self-center">{error}</div>: ""}
                    <Button className="p-2 border w-fit px-4 border-indigo-600 rounded-lg hover:bg-indigo-500 hover:text-inherit duration-200" onClick={handleContactMe} disabled={sent}>
                        {
                            submitting?
                                "Sending..."
                            :sent?
                                "Sent!"
                            :
                                "Send"
                        }
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ContactMe