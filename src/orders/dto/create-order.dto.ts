
import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, ValidateNested } from "class-validator";
import { OrderItemDto } from "./order-item.dto";

export class CreateOrderDto {

// @IsNumber()
// @IsPositive()
// public totalAmount: number;

// @IsNumber()
// @IsPositive()
// public totalItems: number;

// @IsEnum(OrderStatusList, {
//     message: `Posible status value are ${ OrderStatusList}`
// })

// @IsOptional()
// status: OrderStatus = OrderStatus.PENDING;

// @IsOptional()
// @IsBoolean()
// paid: boolean = false


    @IsArray()
    @ArrayMinSize(1)
    @ValidateNested({each: true})
    @Type(()=> OrderItemDto)
    items: OrderItemDto[]

}
