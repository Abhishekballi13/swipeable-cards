import { motion, useMotionValue, useTransform } from "framer-motion";

const Card = ({ card, cardArr, setCardArr, index }) => {
  const x = useMotionValue(0);
  const { url, id, name } = card;

  const rotate = useTransform(x, [-150, 150], [-18, 18]);

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 100) {
      setCardArr((prev) => prev.filter((c) => c.id !== id));
    }
  };

  return (
    <motion.div
      className="absolute w-72 h-96 flex justify-center items-center"
      style={{ x, rotate, zIndex: index }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
    >
      <motion.img
        className="w-full h-full object-cover rounded-lg shadow-lg"
        src={url}
        alt="Placeholder"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      />
      <div className="absolute bottom-2 left-1 text-white p-3 rounded-md w-[90%]">
        <h1 className="text-lg font-bold">{name + " " + "20"}</h1>
        <p className="text-sm">Swipe Right University</p>
      </div>
    </motion.div>
  );
};

export default Card;
