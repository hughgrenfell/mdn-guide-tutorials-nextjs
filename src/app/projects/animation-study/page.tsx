export default function AnimationStudy() {

    const aliceTumbling = [
        { transform: 'rotate(0) scale(1)' },
        { transform: 'rotate(720deg) scale(0)' }
    ];

    const aliceTiming = {
        duration: 2000,
        iterations: 1,
        fill: 'forwards'
    }

    return (
        <>
            <div>This is where the animation study will live</div>
        </>
    )

}