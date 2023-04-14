NAME SAMPLE
data_Seg SEGMENT
    var1   DW   01H
    var2   DW   02H
    sum    DW   $
data_seg ENDS

stack_seg SEGMENT stack
    sta    DB   100 DUP(?)
    TOP    EQU  LENGTH sta
stack_seg ENDS

code_seg SEGMENT
    ASSUME CS: code_seg, DS:data_seg
    ASSUME SS: stack_seg
START :
    MOV AX,data_seg
    MOV DS,AX
    MOV AX,stack_seg
    MOV SS,AX
    MOV SP,TOP

    MOV  BP,SP
    PUSH var1
    PUSH var2
    PUSH sum
    
    
    CALL MY_ADD    
        
    MOV AH,4CH
    INT 21H

    MY_ADD PROC
       PUSH AX
       PUSH BX
       MOV  AX,[BP-2]
       MOV  BX,[BP-4]
       ADD  AX,BX
       MOV  BX,[BP-6]
       MOV  [BX],AX  
       POP  BX
       POP  AX
       RET  6    
    MY_ADD  ENDP

code_seg ENDS





END START
