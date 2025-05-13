import { Size } from "@/interface"
import clsx from "clsx"

interface Props {
  selectedSize?: Size
  availableSize : Size[]

  onSizeChange: (size: Size) => void
}

// TODO: COmponente que se encarga de seleccionar la talla de la prenda
const SizeSelector = ({ selectedSize, availableSize, onSizeChange }: Props) => {
  return (
    <div className="my-2 ">
      <h3 className="font-bold text-sm">Tallas</h3>

      <div className="flex gap-2">

        {
          availableSize.map( size => (
            <button 
              key={size}
              onClick={ ( () => onSizeChange(size) ) }
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