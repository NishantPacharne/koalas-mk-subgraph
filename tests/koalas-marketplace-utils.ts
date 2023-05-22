import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  MarketItemListed,
  MarketListingRemoved,
  MarketSaleCreated,
  PriceUpdated
} from "../generated/KoalasMarketplace/KoalasMarketplace"

export function createMarketItemListedEvent(
  tokenId: BigInt,
  seller: Address,
  owner: Address,
  price: BigInt,
  isListed: boolean
): MarketItemListed {
  let marketItemListedEvent = changetype<MarketItemListed>(newMockEvent())

  marketItemListedEvent.parameters = new Array()

  marketItemListedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  marketItemListedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  marketItemListedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  marketItemListedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  marketItemListedEvent.parameters.push(
    new ethereum.EventParam("isListed", ethereum.Value.fromBoolean(isListed))
  )

  return marketItemListedEvent
}

export function createMarketListingRemovedEvent(
  tokenId: BigInt
): MarketListingRemoved {
  let marketListingRemovedEvent = changetype<MarketListingRemoved>(
    newMockEvent()
  )

  marketListingRemovedEvent.parameters = new Array()

  marketListingRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return marketListingRemovedEvent
}

export function createMarketSaleCreatedEvent(
  tokenId: BigInt,
  seller: Address,
  buyer: Address,
  price: BigInt,
  isListed: boolean
): MarketSaleCreated {
  let marketSaleCreatedEvent = changetype<MarketSaleCreated>(newMockEvent())

  marketSaleCreatedEvent.parameters = new Array()

  marketSaleCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  marketSaleCreatedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  marketSaleCreatedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  marketSaleCreatedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  marketSaleCreatedEvent.parameters.push(
    new ethereum.EventParam("isListed", ethereum.Value.fromBoolean(isListed))
  )

  return marketSaleCreatedEvent
}

export function createPriceUpdatedEvent(
  tokenId: BigInt,
  price: BigInt
): PriceUpdated {
  let priceUpdatedEvent = changetype<PriceUpdated>(newMockEvent())

  priceUpdatedEvent.parameters = new Array()

  priceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  priceUpdatedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return priceUpdatedEvent
}
