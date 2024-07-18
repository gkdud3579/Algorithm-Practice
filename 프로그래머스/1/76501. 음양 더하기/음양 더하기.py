def solution(absolutes, signs):
    total = 0
    for i in range(len(absolutes)):
        if signs[i]:
            total += absolutes[i] # signs[i]가 True인 경우 양수로 더함
        else:
            total -= absolutes[i] # signs[i]가 False인 경우 음수로 뺌
    return total