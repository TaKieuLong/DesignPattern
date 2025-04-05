package main

import "fmt"

type Account struct {
	name string
}

func newAccount(accountName string) *Account {
	return &Account{
		name: accountName,
	}
}

func (a *Account) checkAccount(accountName string) error {
	if accountName != a.name {
		return fmt.Errorf("Account Name is incorrect")
	}
	fmt.Println("Account Name is correct")
	return nil
}
