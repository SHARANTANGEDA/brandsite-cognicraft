import {ToolCard} from "./ToolCard";

export const ToolGrid = ({ tools }) => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-wrap -m-4 justify-start">
                {tools.map((tool, index) => (
                    <ToolCard key={index} tool={tool} />
                ))}
            </div>
        </div>
    );
};
