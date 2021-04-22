import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import EmpEntity from '../db/employer.entity';
import ProEntity from '../db/projects.entity';
import FreelanceEntity from 'src/db/freelancer.entity';
import CreateEmpDto from './dto/create-emp.dto';
import EditEmpDto from './dto/edit-emp.dto';
import CreateFreDto from './dto/create-freel.dto';
import EditFreDto from './dto/edit-freel.dto';
import UpgradAccDto from './dto/upgrade-account.dto';
import EditAccDto from './dto/edit-account.dto';
import CreateProjDto from './dto/create-project.dto';
import EditProjDto from './dto/edit-project.dto';

// import { createQueryBuilder, getConnection } from 'typeorm';

@Injectable()
export default class JobseekersService {

  async insertEmployer(empDetails: CreateEmpDto): Promise<EmpEntity> {
    console.log(empDetails);
    const employer = new EmpEntity()
    employer.firstName = empDetails.firstName;
    employer.lastName = empDetails.lastName;
    employer.email = empDetails.email;
    employer.score = 0;
    employer.phone = empDetails.phone;
    employer.projects = [];
    console.log(empDetails)

    await employer.save();
    return employer;
  }

  async updateEmployer(empDetails: EditEmpDto): Promise<EmpEntity> {
    let emp = EmpEntity.findOne({where:{id:empDetails.id}});
    if(emp === null || emp === undefined)
      throw new NotFoundException();
    
    if(empDetails.firstName)
      (await emp).firstName = empDetails.firstName;

    if(empDetails.lastName)
      (await emp).lastName = empDetails.lastName;
    
    if(empDetails.email)
      (await emp).email = empDetails.email;
    
    if(empDetails.phone)
      (await emp).phone = empDetails.phone;
    
    if(empDetails.projects)
    {
      const projects = [];
      for(let i = 0; i < empDetails.projects.length; i++)
      {
        let project = await ProEntity.findOne(empDetails.projects[i]);
        if(project === null || project === undefined)
          throw new NotFoundException();
        projects.push(project);
      }
      (await emp).projects = projects;
    }

    EmpEntity.update(empDetails.id, await emp);

    return emp
  }

  async getEmployer(empID: number): Promise<EmpEntity> {
    let emp = EmpEntity.findOne({where:{id:empID}});
    if(emp === null || emp === undefined)
      throw new NotFoundException();
    return emp
  }

  async deleteEmployer(empID: number): Promise<EmpEntity> {
    let emp = EmpEntity.findOne({where:{id:empID}});
    if(emp === null || emp === undefined)
      throw new NotFoundException();
    EmpEntity.delete({id:empID});
    return emp;
  }

  async insertFreelancer(freDetails: CreateFreDto): Promise<FreelanceEntity> {
    console.log(freDetails);
    const freelancer = new FreelanceEntity()
    freelancer.firstName = freDetails.firstName;
    freelancer.lastName = freDetails.lastName;
    freelancer.email = freDetails.email;
    freelancer.phone = freDetails.phone;
    freelancer.rank = 0;
    freelancer.type = "free";
    freelancer.accountCost = 0;
    freelancer.autoextensive = false;
    freelancer.expiration = 365;
    console.log(freDetails)

    await freelancer.save();
    return freelancer;
  }

  async updateFreelancer(freDetails: EditFreDto): Promise<FreelanceEntity> {
    let fre = FreelanceEntity.findOne({where:{id:freDetails.id}});
    if(fre === null || fre === undefined)
      throw new NotFoundException();
    
    if(freDetails.firstName)
      (await fre).firstName = freDetails.firstName;

    if(freDetails.lastName)
      (await fre).lastName = freDetails.lastName;
    
    if(freDetails.email)
      (await fre).email = freDetails.email;
    
    if(freDetails.phone)
      (await fre).phone = freDetails.phone;
    
    FreelanceEntity.update(freDetails.id, await fre);

    return fre
  }

  async getFreelancer(freID: number): Promise<FreelanceEntity> {
    let fre = FreelanceEntity.findOne({where:{id:freID}});
    if(fre === null || fre === undefined)
      throw new NotFoundException();
    return fre
  }

  async deleteFreelancer(freID: number): Promise<FreelanceEntity> {
    let fre = FreelanceEntity.findOne({where:{id:freID}});
    if(fre === null || fre === undefined)
      throw new NotFoundException();
    FreelanceEntity.delete({id:freID});
    return fre;
  }

  async insertProject(details: CreateProjDto): Promise<ProEntity> {
    let emp = EmpEntity.findOne({where:{id:details.employerID}});
    if(emp === null || emp === undefined)
      throw new NotFoundException();
    
    console.log(details);
    const project = new ProEntity()
    project.field = details.field;
    project.subfield = details.subfield;
    project.title = details.title;
    project.desc = details.desc;
    project.deadline = details.deadline;
    project.budget = details.budget;
    project.employer = await EmpEntity.findOne(details.employerID) ;
    project.type = details.type;
    project.finalCost = ((details.type === "adhesive") ? 20000 : 10000);
    project.skills = details.skills;
    await project.save();
    return project;
  }

  async updateProject(details: EditProjDto): Promise<ProEntity> {
    let pro = ProEntity.findOne({where:{id:details.id}});
    if(pro === null || pro === undefined)
      throw new NotFoundException();
    
    if(details.field)
      (await pro).field = details.field;

    if(details.subfield)
      (await pro).subfield = details.subfield;

    if(details.title)
      (await pro).title = details.title;

    if(details.desc)
      (await pro).desc = details.desc;

    if(details.skills)
      (await pro).skills = details.skills;

    if(details.size)
      (await pro).size = details.size;

    if(details.budget)
      (await pro).budget = details.budget;

    if(details.type)
      (await pro).type = details.type;

    if(details.deadline)
      (await pro).deadline = details.deadline;

    ProEntity.update(details.id, await pro);

    return pro
  }

  async getProject(proID: number): Promise<ProEntity> {
    let pro = ProEntity.findOne({where:{id:proID}});
    if(pro === null || pro === undefined)
      throw new NotFoundException();
    return pro
  }

  async deleteProject(proID: number): Promise<ProEntity> {
    let pro = ProEntity.findOne({where:{id:proID}});
    if(pro === null || pro === undefined)
      throw new NotFoundException();
    ProEntity.delete({id:proID});
    return pro;
  }
  
  async upgradeAccount(details: UpgradAccDto): Promise<FreelanceEntity> {
    let fre = FreelanceEntity.findOne({where:{id:details.id}});
    if(fre === null || fre === undefined)
      throw new NotFoundException();
    
    if(details.type){
      (await fre).type = details.type;
      (await fre).expiration = 365;
      if(details.type === "silver")
        (await fre).accountCost = 10000;
      else
        (await fre).accountCost = 20000;
    }

    if(details.autoextensive)
      (await fre).autoextensive = details.autoextensive;

    return fre;
  }

  async updateAccount(details: EditAccDto): Promise<FreelanceEntity> {
    let fre = FreelanceEntity.findOne({where:{id:details.id}});
    if(fre === null || fre === undefined)
      throw new NotFoundException();
    
    if(details.autoextensive)
      (await fre).autoextensive = details.autoextensive;

    FreelanceEntity.update(details.id, await fre);

    return fre
  }
}