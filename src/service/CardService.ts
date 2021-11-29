import {cards} from './mocks';
import {Card} from '../types/types';

class CardService {
  private cards: Card[];

  constructor(cards: Card[]) {
    this.cards = cards;
  }

  createFilters({nickname, cardType}: { nickname?: string, cardType?: string}) {
    const filters: any[] = []

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

  getCards({nickname, cardType, sorting}: { nickname?: string, cardType?: string, sorting?: string }): Card[] {
    let cards: Card[] = [...this.cards];
    const filters = this.createFilters({nickname, cardType})

    if (filters.length) {
      cards = cards.filter(card => filters.every(filter => filter(card)));
    }

    if (sorting) {
      if (sorting === 'ASC') {
        cards.sort((a, b) => {
          if (a.expiryDate.year > b.expiryDate.year) return 1;
          if (a.expiryDate.year < b.expiryDate.year) return -1;

          if (a.expiryDate.month > b.expiryDate.month) return 1;
          if (a.expiryDate.month < b.expiryDate.month) return -1;

          return 1;
        });
      }

      if (sorting === 'DESC') {
        cards.sort((a, b) => {
          if (a.expiryDate.year < b.expiryDate.year) return 1;
          if (a.expiryDate.year > b.expiryDate.year) return -1;

          if (a.expiryDate.month < b.expiryDate.month) return 1;
          if (a.expiryDate.month > b.expiryDate.month) return -1;

          return 1;
        });
      }
    }

    return cards;
  }


  addCard(card: Card) {
    this.cards.push(card);
  }

  deleteCard(id: string) {
    this.cards = this.cards.filter(card => card.id !== id)
  }
}

const cardService = new CardService(cards);

export default cardService;