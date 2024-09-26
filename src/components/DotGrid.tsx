const WaterDropGrid = () => {
    return (
        <div className="relative grid h-screen place-content-center bg-slate-900">
            <DotGrid />
        </div>
    );
};

const GRID_WIDTH = 25;
const GRID_HEIGHT = 25;

const DotGrid = () => {
    const dots = [];
    let index = 0;

    for (let i = 0; i < GRID_WIDTH; i++) {
        for (let j = 0; j < GRID_HEIGHT; j++) {
            // dots.push(
            //     <Dot key={index} x={i} y={j} />
            // );
            // index++;
        }
    }
    return <div></div>;
};

export default WaterDropGrid;
