type CustomButtonProps = {
    children: React.ReactNode;
    callback: () => void;
    className?: string;
};

export default function CustomButton({ children, callback, className = "w-20" }: CustomButtonProps) {
    return (
        <button
            onClick={callback}
            className={`${className} py-1 rounded-lg border border-white/30 bg-white/10 cursor-pointer hover:bg-white/20 transition`}
        >
            {
                children
            }
        </button>
    )
}
