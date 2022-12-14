/**
 * This class creates an integer stack
 *
 * By:      Rodas Nega
 * Version: 1.0
 * Since:   2022-10-04
 */

class RodasStack {
  private readonly stackAsList: number[] = []

  public Push(pushedNumber: number): void {
    this.stackAsList.push(pushedNumber)
  }

  public Pop(): any {
    return this.stackAsList.pop()
  }

  StackArray(): void {
    console.log(this.stackAsList)
  }
}

export = RodasStack
