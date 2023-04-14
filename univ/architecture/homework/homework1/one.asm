DATA SEGMENT
    ; 准备数据 编码 数字 < 大写字母 < 小写字母
    MY0 DB 'Zero', '$'
    MY1 DB 'First', '$'
    MY2 DB 'Second', '$'
    MY3 DB 'Third', '$'
    MY4 DB 'Fourth', '$'
    MY5 DB 'Fifth', '$'
    MY6 DB 'Sixth', '$'
    MY7 DB 'Seventh', '$'
    MY8 DB 'Eighth', '$'
    MY9 DB 'Ninth', '$'
    MYA DB 'Alpha', '$'
    MYB DB 'Bravo', '$'
    MYC DB 'China', '$'
    MYD DB 'Delta', '$'
    MYE DB 'Echo', '$'
    MYF DB 'Foxtrot', '$'
    MYG DB 'Golf', '$'
    MYH DB 'Hotel', '$'
    MYI DB 'India', '$'
    MYJ DB 'Juliet', '$'
    MYK DB 'Kilo', '$'
    MYL DB 'Lima', '$'
    MYM DB 'Mary', '$'
    MYN DB 'November', '$'
    MYO DB 'Oscar', '$'
    MYP DB 'Paper', '$'
    MYQ DB 'Quebec', '$'
    MYR DB 'Research', '$'
    MYS DB 'Sierra', '$'
    MYT DB 'Tango', '$'
    MYU DB 'Uniform', '$'
    MYV DB 'Victor', '$'
    MYW DB 'Whisky', '$'
    MYX DB 'X-ray', '$'
    MYY DB 'Yankee', '$'
    MYZ DB 'Zulu', '$'
    MYA0 DB 'alpha', '$'
    MYB0 DB 'bravo', '$'
    MYC0 DB 'china', '$'
    MYD0 DB 'delta', '$'
    MYE0 DB 'echo', '$'
    MYF0 DB 'foxtrot', '$'
    MYG0 DB 'golf', '$'
    MYH0 DB 'hotel', '$'
    MYI0 DB 'india', '$'
    MYJ0 DB 'juliet', '$'
    MYK0 DB 'kilo', '$'
    MYL0 DB 'lima', '$'
    MYM0 DB 'mary', '$'
    MYN0 DB 'november', '$'
    MYO0 DB 'oscar', '$'
    MYP0 DB 'paper', '$'
    MYQ0 DB 'quebec', '$'
    MYR0 DB 'research', '$'
    MYS0 DB 'sierra', '$'
    MYT0 DB 'tango', '$'
    MYU0 DB 'uniform', '$'
    MYV0 DB 'victor', '$'
    MYW0 DB 'whisky', '$'
    MYX0 DB 'x-ray', '$'
    MYY0 DB 'yankee', '$'
    MYZ0 DB 'zulu', '$'
    MYUPPER DW MYA, MYB, MYC, MYD, MYE, MYF, MYG, MYH, MYI, MYJ, MYK, MYL, MYM, MYN, MYO, MYP, MYQ, MYR, MYS, MYT, MYU, MYV, MYW, MYX, MYY, MYZ
    MYNUMBER DW MY0, MY1, MY2, MY3, MY4, MY5, MY6, MY7, MY8, MY9
    MYLOWER DW MYA0, MYB0, MYC0, MYD0, MYE0, MYF0, MYG0, MYH0, MYI0, MYJ0, MYK0, MYL0, MYM0, MYN0, MYO0, MYP0, MYQ0, MYR0, MYS0, MYT0, MYU0, MYV0, MYW0, MYX0, MYY0, MYZ0
    MYNAME DB 'YangShibo 2000013058', '$'
DATA ENDS

STACK SEGMENT STACK
    STA DB 512 DUP(?) ; 多大
    TOP EQU LENGTH STA ; 抄一抄就行
STACK ENDS

CODE SEGMENT
    ASSUME CS:CODE, DS: DATA, SS:STACK ; 放到寄存器里去(本质只会做CS，后面还要手工两步move)
    BEGIN:
        ; 准备工作开始
        MOV AX, DATA
        MOV DS, AX
        MOV AX, STACK
        MOV SS, AX
        MOV AX, TOP
        MOV SP, AX 
        ; 准备工作结束
    ; 循环读数
    ROTATE:
        ; 读取一个数字放到AL中
        MOV AH, 0H
        INT 16H
        ; 如果是ESC，退出程序
        CMP AL, 1BH
        JNE NOTQUIT
        JMP QUIT
    NOTQUIT:
        ; 处理数字
        ; 如果小于'0'，输出问号
        CMP AL, '0'
        JL QUESTION
        CMP AL, '9'
        JLE NUMBER
        ; 处理大写字母
        ; 如果小于'A'，输出问号
        CMP AL, 'A'
        JL QUESTION
        CMP AL, 'Z'
        JLE UPPER
        ; 处理小写字母
        ; 如果小于'a'，输出问号
        CMP AL, 'a'
        JL QUESTION
        CMP AL, 'z'
        JLE LOWWER
        ; 超出范围，输出问号
        JMP QUESTION
    ; 输出问号
    QUESTION:
        MOV DL, '?'
        MOV AH, 02H
        INT 21H
        CALL my_line_feed
        ; 跳转到循环体的开始
        JMP ROTATE
    ; 输出数字
    NUMBER:
        ; 找到对应字符串
        MOV AH, 00H
        SUB AX, '0'
        MOV BX, AX
        MOV AX, 02H
        MUL BX
        MOV BX, OFFSET MYNUMBER
        ADD BX, AX
        MOV CX, [BX]
        MOV DX, CX
        ; 输出
        MOV AH, 09H ; 指明中断对应的指令，把DX输出到屏幕上
        INT 21H
        CALL my_line_feed
        JMP ROTATE
    ; 输出大写字母
    UPPER:
        ; 找到对应字符串
        MOV AH, 00H
        SUB AX, 'A'
        MOV BX, AX
        MOV AX, 02H
        MUL BX
        MOV BX, OFFSET MYUPPER
        ADD BX, AX
        MOV CX, [BX]
        MOV DX, CX
        ; 输出
        MOV AH, 09H ; 指明中断对应的指令，把DX输出到屏幕上
        INT 21H
        CALL my_line_feed
        JMP ROTATE
    ; 输出小写字母
    LOWWER:
        ; 找到对应字符串
        MOV AH, 00H
        SUB AX, 'a'
        MOV BX, AX
        MOV AX, 02H
        MUL BX
        MOV BX, OFFSET MYLOWER
        ADD BX, AX
        MOV CX, [BX]
        MOV DX, CX
        ; 输出
        MOV AH, 09H ; 指明中断对应的指令，把DX输出到屏幕上
        INT 21H
        CALL my_line_feed
        JMP ROTATE
    ; 换行函数
    my_line_feed:
        push AX
        push DX
        MOV AH,02H
        MOV DL,0DH
        INT 21H
        MOV AH,02H
        MOV DL,0AH
        int 21H
        pop DX
        pop AX
        RET
    ; 退出程序
    QUIT:
        MOV DX, OFFSET MYNAME ; 偏移地址放到DX中(和DS一起算)
        MOV AH, 09H ; 指明中断对应的指令，把DX输出到屏幕上
        INT 21H
        MOV AH, 4CH
        INT 21H
    CODE ENDS
        END BEGIN