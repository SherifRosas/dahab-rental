import { User, BedDouble } from "lucide-react";

interface RoomCardProps {
    title: string;
    price: number;
    capacity: number;
    description: string;
    type: 'shared' | 'private' | 'multi';
    onSelect?: () => void;
}

export default function RoomCard({ title, price, capacity, description, type, onSelect }: RoomCardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
            <div className="h-48 bg-gray-200 relative">
                {/* Placeholder Image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100">
                    Image Placeholder
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[var(--color-sea-blue)] uppercase tracking-wider">
                    {type}
                </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm mb-4 flex-1">{description}</p>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-1">
                        <User size={16} />
                        <span>Max {capacity}</span>
                    </div>
                    {type === 'shared' && (
                        <div className="flex items-center gap-1">
                            <BedDouble size={16} />
                            <span>Bunk Bed</span>
                        </div>
                    )}
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                    <div>
                        <span className="text-2xl font-bold text-[var(--color-sea-blue)]">${price}</span>
                        <span className="text-gray-400 text-xs"> / night</span>
                    </div>
                    <button
                        onClick={onSelect}
                        className="btn-secondary text-sm px-6 py-2 hover:bg-[var(--color-sea-blue)] hover:text-white"
                    >
                        Select
                    </button>
                </div>
            </div>
        </div>
    );
}
