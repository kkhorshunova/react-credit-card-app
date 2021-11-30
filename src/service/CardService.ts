import {cards} from './mocks';
import {Card, FilterFunc, Filters, Sorting} from 'types/types';

class CardService {
  private cards: Card[];

  constructor(cards: Card[]) {
    this.cards = cards;
  }

  getCards({nickname, cardType, sorting}: Filters): Card[] {
    let cards: Card[] = [...this.cards];
    const filters = this.createFilters({nickname, cardType})

    if (filters.length) {
      cards = cards.filter(card => filters.every(filter => filter(card)));
    }

    if (sorting === Sorting.Asc) {
      cards.sort(this.sortByExpiryDate)
    }

    if (sorting === Sorting.Desc) {
      cards.sort((a, b) => -this.sortByExpiryDate(a, b));
    }

    return cards;
  }

  addCard(card: Card) {
    this.cards.push(card);
  }

  deleteCard(id: string) {
    this.cards = this.cards.filter(card => card.id !== id)
  }

  createFilters({nickname, cardType}: Omit<Filters, 'sorting'>) {
    const filters: FilterFunc[] = []

    if (nickname) {
      filters.push((card: Card) =>
        card.nickname ? new RegExp(nickname, 'gi').test(card.nickname) : false
      )
    }

    if (cardType) {
      filters.push((card: Card) => card.cardType === cardType)
    }

    return filters;
  }

  sortByExpiryDate(a: Card, b: Card): number {
    if(a.expiryDate.year === b.expiryDate.year) {
      return Number(a.expiryDate.month) - Number(b.expiryDate.month);
    }

    return Number(a.expiryDate.year) - Number(b.expiryDate.year);
  }
}

const cardService = new CardService(cards);

export default cardService;