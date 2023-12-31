import Image from 'next/image'

export default function Home() {
  
  return (
    <>
      <div className="h-32 w-32 relative">
        <Image
          className="avatar-small"
          src={"Avatar.png"}
          fill={true}
          style={{
            objectFit: "contain",
            border: '2px solid black',
            borderRadius: '9999px'
          }}
          alt={"Default Avatar"}
        />
      </div>
      <div>
        This is a simple site to practice NextJS and display the output of the MDN Guide Tutorials. The tutorials have been converted from Vanilla JS and CSS to 
        next JS and tailwind. 
      </div>
    </>

  )

}
