import { TypeAnimation } from 'react-type-animation';


const Textanimate = () => {
  return (
    
    <TypeAnimation
    sequence={[
        // Same substring at the start will only be typed out once, initially
        '6404128 ธนโชติ เหมชะญาติ',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'ส่งงาน Term Break',
        1000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
    />
  );
};

export default Textanimate