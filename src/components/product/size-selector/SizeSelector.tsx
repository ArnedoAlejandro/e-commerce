import { Size } from "@/interface"
import clsx from "clsx"

interface Props {
  selectedSize: Size
  availableSize : Size[]
}
const SizeSelector = ({ selectedSize, availableSize}: Props) => {
  return (
    <div className="my-5 ">
      <h3 className="font-bold text-sm">Tallas</h3>

      <div className="flex gap-2">

        {
          availableSize.map( size => (
            <button 
              key={size}
              className={
                clsx(
                  "mx-2 hover:underline text-lg cursor-pointer",
                  {
                    "font-bold underline": size === selectedSize
                  }
                )
              }
            >
              {size}
            </button>
          ))
        }

      </div>
    </div>
  )
}

export default SizeSelector