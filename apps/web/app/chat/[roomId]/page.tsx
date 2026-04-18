import { TextInput } from "@repo/ui/text-input";

export default function() {
    return <div className="w-screen h-screen flex flex-col justify-between">
        <div>
            chat room
        </div>
        <div>
            <TextInput placeholder="Chat here"/>
        </div>
    </div>
} 