'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Link from 'next/link'
import { toast } from '@/hooks/use-toast'

export default function RegisterPage() {
  const [isCuidador, setIsCuidador] = useState(true)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    celular: '',
    endereco: '',
    especialidade: '',
    condicaoPaciente: '',
    detalhesAdicionais: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.senha !== formData.confirmarSenha) {
        toast({
            title: 'Validation Error',
            description: 'Passwords do not match. Please check and try again.',
            variant: 'destructive',
        })
        return
    }
    console.log('Cadastro', formData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Sign up for Acolhe</CardTitle>
          <CardDescription className="text-center">
            Create your account to start using the platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center justify-center gap-4">
              <Button
                type="button"
                variant="outline"
                className={`flex-1 ${
                  isCuidador ? 'bg-blue-600 text-white hover:bg-blue-700 hover:text-white' : 'bg-white hover:bg-gray-50'
                }`}
                onClick={() => setIsCuidador(true)}
              >
                I am a caregiver
              </Button>
              <Button
                type="button"
                variant="outline"
                className={`flex-1 ${
                  !isCuidador ? 'bg-blue-600 text-white hover:bg-blue-700 hover:text-white' : 'bg-white hover:bg-gray-50'
                }`}
                onClick={() => setIsCuidador(false)}
              >
                Looking for a caregiver
              </Button>
            </div>

            <div className="space-y-2">
              <Label htmlFor="nome">Full name</Label>
              <Input 
                id="nome" 
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input 
                id="email" 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="senha">Password</Label>
              <Input 
                id="senha" 
                name="senha"
                type="password"
                value={formData.senha}
                onChange={handleInputChange}
                required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmarSenha">Confirm password</Label>
              <Input 
                id="confirmarSenha" 
                name="confirmarSenha"
                type="password"
                value={formData.confirmarSenha}
                onChange={handleInputChange}
                required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="celular">Phone (WhatsApp)</Label>
              <Input 
                id="celular" 
                name="celular"
                type="tel"
                value={formData.celular}
                onChange={handleInputChange}
                required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="endereco">Full address</Label>
              <Input 
                id="endereco" 
                name="endereco"
                value={formData.endereco}
                onChange={handleInputChange}
                required 
              />
            </div>

            {isCuidador ? (
              <div className="space-y-2">
                <Label htmlFor="especialidade">Specialty</Label>
                <Select onValueChange={handleSelectChange('especialidade')}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="parcialmente">Partially dependent</SelectItem>
                    <SelectItem value="totalmente">Fully dependent</SelectItem>
                    <SelectItem value="independente">Not dependent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <Label htmlFor="condicaoPaciente">Patient's condition</Label>
                  <Select onValueChange={handleSelectChange('condicaoPaciente')}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="parcial">Partially dependent</SelectItem>
                      <SelectItem value="total">Fully dependent</SelectItem>
                      <SelectItem value="independente">Not dependent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="detalhesAdicionais">Additional patient details (optional)</Label>
                  <Textarea 
                    id="detalhesAdicionais" 
                    name="detalhesAdicionais"
                    value={formData.detalhesAdicionais}
                    onChange={handleInputChange}
                  />
                </div>
              </>
            )}

            {isCuidador && (
              <div className="space-y-2">
                <Label htmlFor="referencias">References and experience</Label>
                <Input 
                  id="referencias" 
                  type="file" 
                  accept=".pdf,.doc,.docx"
                />
                <p className="text-sm text-gray-500">Upload certificates or relevant documents</p>
              </div>
            )}

            <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 hover:text-white">Complete registration</Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <p className="text-sm text-center text-gray-600 mt-4">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}