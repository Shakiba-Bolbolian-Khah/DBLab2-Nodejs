import { Body, Controller, Get, Post, Put, Header, Delete, Param } from '@nestjs/common';
import {ApiResponse } from '@nestjs/swagger';
import JobseekersService from './jobseekers.service';
import CreateEmpDto from './dto/create-emp.dto';
import EditEmpDto from './dto/edit-emp.dto';
import CreateFreDto from './dto/create-freel.dto';
import EditFreDto from './dto/edit-freel.dto';
import UpgradAccDto from './dto/upgrade-account.dto';
import EditAccDto from './dto/edit-account.dto';
import CreateProjDto from './dto/create-project.dto';
import EditProjDto from './dto/edit-project.dto';

@Controller('jobseekers')
export class JobseekersController {
  constructor(private readonly jobService: JobseekersService) {}
  
  @Post('employers/post')
  @ApiResponse({ status:200, description:'Create new employer' })
  async addEmp( @Body() emp: CreateEmpDto) {
    return this.jobService.insertEmployer(emp);
  }

  @Put('employers/update')
  @ApiResponse({ status:200, description:'Update existed employer' })
  async editEmp( @Body() emp: EditEmpDto) {
    return this.jobService.updateEmployer(emp);
  }

  @Get('employers')
  @ApiResponse({ status:200, description:'Employer detail' })
  async getEmp( @Param('id') empID: number ) {
    return this.jobService.getEmployer(empID);
  }

  @Delete('employers/delete')
  @ApiResponse({ status:200, description:'Delete existed employer' })
  @Header('Content-Type', 'application/json')
  async deleteEmp( @Body() empID: number ) {
    return this.jobService.deleteEmployer(empID);
  }

  @Post('projects/post')
  @ApiResponse({ status:200, description:'Create new project' })
  async addProj( @Body() pro: CreateProjDto) {
    return this.jobService.insertProject(pro);
  }

  @Put('projects/update')
  @ApiResponse({ status:200, description:'Update existed project' })
  async updateProj( @Body() pro: EditProjDto) {
    return this.jobService.updateProject(pro);
  }

  @Get('projects')
  @ApiResponse({ status:200, description:'Project detail' })
  async getProj( @Param('id') proID: number ) {
    return this.jobService.getProject(proID);
  }

  @Delete('projects/delete')
  @ApiResponse({ status:200, description:'Delete existed project' })
  @Header('Content-Type', 'application/json')
  async deleteProj( @Body() proID: number ) {
    return this.jobService.deleteProject(proID);
  }

  @Post('freelancers/post')
  @ApiResponse({ status:200, description:'Create new freelancer' })
  async addFre( @Body() fre: CreateFreDto) {
    return this.jobService.insertFreelancer(fre);
  }

  @Put('freelancers/update')
  @ApiResponse({ status:200, description:'Update existed freelancer' })
  async editFre( @Body() fre: EditFreDto) {
    return this.jobService.updateFreelancer(fre);
  }

  @Get('freelancers')
  @ApiResponse({ status:200, description:'Freelancer detail' })
  @Header('Content-Type', 'application/json')
  async getFre( @Param('id') freID: number ) {
    return this.jobService.getFreelancer(freID);
  }

  @Delete('freelancers/delete')
  @ApiResponse({ status:200, description:'Delete existed freelancer' })
  @Header('Content-Type', 'application/json')
  async deleteFre( @Body() id: number ) {
    console.log(id)
    return this.jobService.deleteFreelancer(id);
  }

  @Post('type/post')
  @ApiResponse({ status:200, description:'Upgrade freelancer account' })
  async upgradeAcc( @Body() acc: UpgradAccDto) {
    return this.jobService.upgradeAccount(acc);
  }

  @Put('type/update')
  @ApiResponse({ status:200, description:'Edit freelancer account' })
  async editAcc( @Body() acc: EditAccDto) {
    return this.jobService.updateAccount(acc);
  }

  @Get('type')
  @ApiResponse({ status:200, description:'Freelancer account detail' })
  async getAcc( @Param('id') freID: number ) {
    return this.jobService.getFreelancer(freID);
  }
}
