DATA SEGMENT
    NUM DW 0011101000000111B ; DW: Data word intel 16位
    NOTES DB 'The result is:', '$' ; 字符串+','分割，指向第一个地址
    MYNOTES DB 'NAME: Yang Shibo', '$'
DATA ENDS
STACK SEGMENT STACK
    STA DB 50 DUP(?) ; 多大
    TOP EQU LENGTH STA ; 抄一抄就行
STACK ENDS
CODE SEGMENT
    ASSUME CS:CODE, DS: DATA, SS:STACK ; 放到寄存器里去(本质只会做CS，后面还要手工两步move)
    BEGIN: 
        MOV AX, DATA ; DATA(地址)->AX
        MOV DS, AX ; DATA->DS
        MOV AX, STACK
        MOV SS, AX
        MOV AX, TOP
        MOV SP, AX ; 准备工作结束
        ;------------
        ;------------
        MOV DX, OFFSET MYNOTES ; 偏移地址放到DX中(和DS一起算)
        MOV AH, 09H ; 指明中断对应的指令，把DX输出到屏幕上
        INT 21H
        ;----换行-----
        CALL my_line_feed
        MOV AH, 0H
        INT 16H
        MOV DL, AL
        MOV AH, 02H
        INT 21H
        CALL my_line_feed
        ;------------
        ;------------
        MOV DX, OFFSET NOTES ; 偏移地址放到DX中(和DS一起算)
        MOV AH, 09H ; 指明中断对应的指令，把DX输出到屏幕上
        INT 21H
        MOV BX, NUM
        MOV CH, 4 ; 准备循环
    ROTATE: 
        MOV CL, 4
        ROL BX, CL
        MOV AL, BL
        AND AL, 0FH
        ADD AL, 30h ; 转换成ASCII码
        CMP AL, '9'
        JL DISPLAY
        ADD AL, 07H
    DISPLAY: 
        MOV DL, AL
        MOV AH, 2
        INT 21H
        DEC CH
        JNZ ROTATE
        MOV AX, 4C00H
        INT 21H
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
    CODE ENDS
        END BEGIN