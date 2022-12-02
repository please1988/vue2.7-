import { parse } from './parser/index'
import { optimize } from './optimizer'
import { generate } from './codegen/index'
import { createCompilerCreator } from './create-compiler'
import { CompilerOptions, CompiledResult } from 'types/compiler'

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
export const createCompiler = createCompilerCreator(function baseCompile(
  template: string,
  options: CompilerOptions
): CompiledResult {
  // 执行baseCompile 之前的所有事情，只有一个目的，就是构造最终的编译配置
  const ast = parse(template.trim(), options)
<<<<<<< HEAD
  
  
  // 优化，遍历ast，标记静态节点和静态跟节点
=======
  console.log(ast, 'ast')

>>>>>>> 1df78c83f4d30b606669abb9ac5ed65a15e8a487
  if (options.optimize !== false) {
    optimize(ast, options)
  }
  // 代码生成， 将ast 转化为可执行的render函数字符串形式
  const code = generate(ast, options)
  
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
})
