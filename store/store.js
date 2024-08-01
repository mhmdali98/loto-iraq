// src/stores/useNumbersStore.js
import { defineStore } from 'pinia';

export const useStore = defineStore('numbers', {
  state: () => ({
    numbers: [],  // Initialize an empty array for numbers
    page:0
  }),
  actions: {
    addNumber(number) {
      this.numbers.push(number);
    },
    removeNumber(index) {
      this.numbers.splice(index, 1);
    },
    setNumbers(numbers) {
      this.numbers = numbers;
    }
  }
});
