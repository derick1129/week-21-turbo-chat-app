interface inputProps {
    placeholder: string
}

export function TextInput({
    placeholder
}: inputProps) {
    return <div className="m-3">
        <input
            className="w-72 rounded-md border border-zinc-400 bg-white px-3 py-2 text-black placeholder:text-zinc-500 focus:border-zinc-700 focus:outline-none"
            placeholder={placeholder}
        />
     </div>
}