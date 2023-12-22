"use strict";



class Count {
  constructor() {
      this.textArea = document.querySelector(".count__textarea")
      this.wordCount = document.querySelectorAll(".word-count")
      this.charCount = document.querySelectorAll(".character-count")
      
      window.addEventListener("load", this.updateCount.bind(this))
      this.textArea.addEventListener("input", this.updateCount.bind(this))
  }

  /**
   
    @returns {number} 
   */
  countWords() {
      const value = this.textArea.value.trim()
      if(!value) return 0
      return value.split(/\s+/).length
  }

  /**
   
   * @returns {number} 
   */
  countChars() {
      return this.textArea.value.length 
  }

  /**
   
   * @returns {void}
   */
  updateCount() {
      const numWords = this.countWords()
      const numChars = this.countChars()

      this.wordCount.forEach((wordCount) => {
          wordCount.textContent = numWords.toString(10)
      })

      this.charCount.forEach((charCount) => {
          charCount.textContent = numChars.toString(10)
      })
  }
}

new Count() 
