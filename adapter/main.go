package main

import (
	"fmt"
	"strconv"
)

func main() {
	resultA := a()

	resultB := b(4)

	apdaterToB, err := strconv.Atoi(resultA)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(apdaterToB + resultB)
}

func a() string {
	return "10"
}
func b(num int) int {
	return num
}
