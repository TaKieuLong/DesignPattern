package main

import (
	"fmt"
	"log"
)

func main() {
	walletFacades := NewWalletFacade("abc", 1234)
	err := walletFacades.AddMoneyToWallet("abc", 1234, 10)
	if err != nil {
		log.Fatalf("Error: %s\n", err.Error())
	}

	fmt.Println()
	err = walletFacades.DeductMoneyFromWallet("abc", 1234, 5)
	if err != nil {
		log.Fatalf("Error: %s\n", err.Error())
	}
}
