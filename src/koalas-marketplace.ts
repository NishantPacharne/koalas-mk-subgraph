import {
  MarketItemListed as MarketItemListedEvent,
  MarketListingRemoved as MarketListingRemovedEvent,
  MarketSaleCreated as MarketSaleCreatedEvent,
  PriceUpdated as PriceUpdatedEvent
} from "../generated/KoalasMarketplace/KoalasMarketplace"
import {
  MarketItemListed,
  MarketListingRemoved,
  MarketSaleCreated,
  PriceUpdated
} from "../generated/schema"

export function handleMarketItemListed(event: MarketItemListedEvent): void {
  let entity = new MarketItemListed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.seller = event.params.seller
  entity.owner = event.params.owner
  entity.price = event.params.price
  entity.isListed = event.params.isListed

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketListingRemoved(
  event: MarketListingRemovedEvent
): void {
  let entity = new MarketListingRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketSaleCreated(event: MarketSaleCreatedEvent): void {
  let entity = new MarketSaleCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.seller = event.params.seller
  entity.buyer = event.params.buyer
  entity.price = event.params.price
  entity.isListed = event.params.isListed

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePriceUpdated(event: PriceUpdatedEvent): void {
  let entity = new PriceUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.price = event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
