import Image from 'next/image'

export default function Home() {
  
  return (
    <div>
      <Image
        className="avatar-small"
        src={"/Avatar.png"}
        fill={true}
        style={{
          objectFit: "contain",
          border: '2px solid black',
          borderRadius: '9999px'
        }}
        alt={"Default Avatar"}
      />
    </div>
  )

}
