DATA SEGMENT
    FOUNDSTR DB 'Yes! Location: ', '$'
    NOTFOUNDSTR DB 'No...', '$'
    MYNAME DB 'YangShibo 2000013058', '$'
    STRING DB 256 DUP(0)
DATA ENDS

STACK SEGMENT STACK
    STA DB 50 DUP(?) ; 多大
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
        ; BX标识字符串长度
        MOV BX, 00H
    ; 循环读入字符
    ROTATE:
        ; 读取一个数字放到AL中
        MOV AH, 0H
        INT 16H
        ; 如果是ESC，退出程序
        CMP AL, 1BH
        JNE NOTQUIT
        JMP QUIT
    NOTQUIT:
        ; 换行跳转到记录目标字符
        CMP AL, 0DH
        ; JE ROTATE
        ; CMP AL, 0AH
        JE READTARGET
        ; 其他情况，把字符装入STRING中
        ; 找到对应位置
        MOV CX, OFFSET STRING
        ADD CX, BX
        ; 装入，长度+1
        MOV DI, CX
        MOV [DI], AL
        INC BX
        ; 然后把这个字符输出出去，表示已经输入了这个字符
        MOV DL, AL
        PUSH AX
        MOV AH, 02H
        INT 21H
        POP AX
        JMP ROTATE
    ; 读取目标字符
    READTARGET:
        CALL my_line_feed
    MYIGNORE:
        ; 读取一个数字放到AL中
        MOV AH, 0H
        INT 16H
        ; 如果是ESC，退出程序
        CMP AL, 1BH
        JNE TARGETNOTQUIT
        JMP QUIT
    TARGETNOTQUIT:
        ; 如果是回车的第二个字符，忽略
        CMP AL, 0AH
        JE MYIGNORE
        ; 否则把目标字符放到CL里
        MOV CH, 00H
        MOV CL, AL
        ; 然后把这个字符输出出去，表示已经输入了这个字符
        MOV DL, AL
        PUSH AX
        MOV AH, 02H
        INT 21H
        POP AX
        ; 在A寄存器中存放现在的id
        MOV AX, 00H
        CALL my_line_feed
    ; 遍历每一个字符
    FINDING:
        ; 如果A已经和B相等，那么没有结果
        CMP AX, BX
        JE NOTFOUND
        ; 其他情况下拿出字符比较
        MOV DX, OFFSET STRING
        ADD DX, AX
        MOV DI, DX
        MOV DL, [DI]
        CMP DL, CL
        ; 找到了
        JE FOUND
        ; 没找到，查下一个地址
        INC AX
        JMP FINDING
    ; 找到了，输出位置
    FOUND:
        INC AX
        PUSH AX
        MOV DX, OFFSET FOUNDSTR ; 偏移地址放到DX中(和DS一起算)
        MOV AH, 09H ; 指明中断对应的指令，把DX输出到屏幕上
        INT 21H
        POP AX
    ; 输出AX中的数字，逐个字符转出来，位数存在CX中
    OUTPUTINT:
        MOV CX, 00H
    ; 输出每位
    EACH:
        ; 最开始AX>=1
        CMP AX, 0
        ; 相等就除完了，输出
        JE OUTPUT
        ; 不相等就往栈里存数
        MOV DX, 0AH
        DIV DL
        ; AL是商，AH是余数
        MOV DH, 0H
        MOV DL, AH
        PUSH DX
        MOV AH, 0
        INC CX
        JMP EACH
    ; 把栈里的数依次读出来
    OUTPUT:
        CMP CX, 00H
        ; 输出完了，打扫残局
        JE CLEAR
        ; 没输出完，输出下一个数字
        POP DX
        ADD DL, '0'
        MOV AH, 02H
        DEC CX
        INT 21H
        JMP OUTPUT
    ; 没找到
    NOTFOUND:
        MOV DX, OFFSET NOTFOUNDSTR ; 偏移地址放到DX中(和DS一起算)
        MOV AH, 09H ; 指明中断对应的指令，把DX输出到屏幕上
        INT 21H
        ; 打扫残局
        JMP CLEAR
    ; 收拾残局，准备下一轮查询
    CLEAR:
        MOV AX, 00H
        MOV CX, 00H
        MOV DX, 00H
        JMP READTARGET
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
    QUIT:
        MOV DX, OFFSET MYNAME ; 偏移地址放到DX中(和DS一起算)
        MOV AH, 09H ; 指明中断对应的指令，把DX输出到屏幕上
        INT 21H
        MOV AH, 4CH
        INT 21H
    CODE ENDS
        END BEGIN